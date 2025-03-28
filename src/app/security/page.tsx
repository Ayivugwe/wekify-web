
'use client';

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Shield, Lock, UserCheck, Database, Eye, Server } from "lucide-react";

export default function SecurityPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Privacy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Wekify, we prioritize the security and privacy of language data. Learn about our comprehensive approach to protecting cultural heritage.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Data Protection</h2>
                <p className="text-gray-600">
                  We implement end-to-end encryption and secure cloud storage to protect all language data and cultural materials.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Access Control</h2>
                <p className="text-gray-600">
                  Robust authentication and authorization systems ensure that communities maintain control over their language resources.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Database className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Data Backup</h2>
                <p className="text-gray-600">
                  Regular automated backups and disaster recovery procedures protect against data loss.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Privacy Controls</h2>
                <p className="text-gray-600">
                  Communities have full control over data visibility and sharing preferences.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Security Commitment</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Infrastructure Security</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Regular security audits and updates</li>
                    <li>DDoS protection</li>
                    <li>24/7 monitoring</li>
                    <li>Secure data centers</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Data Privacy</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>GDPR compliance</li>
                    <li>Data encryption at rest and in transit</li>
                    <li>Privacy-first design</li>
                    <li>Transparent data practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
